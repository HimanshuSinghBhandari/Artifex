import React, {useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaBlog, FaYoutube, FaInstagram, FaSync, FaSearch, FaCopy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { chatSession } from '../../utils/aimodel';



const cardData = [
  {
    icon: FaBlog,
    title: "Blog Title",
    content: "Generate catchy and SEO-friendly blog titles.",
    link: "blog-title",
    prompt: "Generate 5 catchy and SEO-friendly blog titles for the following topic. Each title should be unique, compelling, and optimized for search engines. Consider including numbers, power words, and questions to increase click-through rates. Ensure the titles are relevant to the topic and appeal to the target audience. Topic:"
  },
  {
    icon: FaBlog,
    title: "Blog Content",
    content: "Create engaging blog content with AI assistance.",
    link: "blog-content",
    prompt: "Write a comprehensive and engaging blog post about the following topic. Include an attention-grabbing introduction, well-structured body paragraphs with subheadings, and a conclusion that summarizes key points. Use a conversational tone, incorporate relevant examples or statistics, and aim for a word count of approximately 800-1000 words. Topic:"
  },
  {
    icon: FaBlog,
    title: "Blog Topic Ideas",
    content: "Get inspiration for your next blog post.",
    link: "blog-ideas",
    prompt: "Generate 10 unique and interesting blog topic ideas related to the following theme. Each idea should be specific, appealing to the target audience, and have the potential for in-depth exploration. Consider current trends, frequently asked questions, and evergreen content. Theme:"
  },
  {
    icon: FaYoutube,
    title: "YouTube SEO Title",
    content: "Craft attention-grabbing, SEO-optimized YouTube titles.",
    link: "youtube-title",
    prompt: "Create 5 attention-grabbing and SEO-optimized YouTube video titles for the following video concept. Each title should be under 60 characters, include relevant keywords, and entice viewers to click. Consider using power words, numbers, or questions to increase engagement. Video concept:"
  },
  {
    icon: FaYoutube,
    title: "YouTube Description",
    content: "Generate compelling YouTube video descriptions.",
    link: "youtube-description",
    prompt: "Write an engaging and SEO-friendly YouTube video description for the following video. Include a brief, attention-grabbing summary in the first 2-3 sentences. Then, provide more details about the video content, any key timestamps, and relevant links or calls-to-action. Use appropriate keywords naturally throughout the description. Aim for 150-200 words. Video title and main points:"
  },
  {
    icon: FaYoutube,
    title: "YouTube Tags",
    content: "Create relevant tags to improve your video's discoverability.",
    link: "youtube-tags",
    prompt: "Generate a list of 15-20 relevant tags for a YouTube video on the following topic. Include a mix of broad and specific keywords, long-tail phrases, and related terms that potential viewers might search for. Ensure the tags are accurate and closely related to the video content. Video topic:"
  },
  {
    icon: FaSync,
    title: "Rewrite Article",
    content: "Revamp your existing content with a fresh perspective.",
    link: "rewrite-article",
    prompt: "Rewrite the following article to provide a fresh perspective while maintaining the core message. Improve the structure, enhance clarity, and update any outdated information. Use a engaging and authoritative tone, and aim to make the content more compelling and valuable to readers. Original article:"
  },
  {
    icon: FaSearch,
    title: "Plagiarism Check",
    content: "Ensure your content is original and plagiarism-free.",
    link: "plagiarism-check",
    prompt: "Analyze the following text for potential plagiarism. Identify any passages that seem unoriginal or closely resemble existing content. Provide suggestions for rephrasing or citing sources where necessary. Note that this is not a comprehensive plagiarism check and should be used as a preliminary assessment. Text to check:"
  },
  {
    icon: FaInstagram,
    title: "Instagram Post Generator",
    content: "Create eye-catching Instagram posts with AI.",
    link: "instagram-post",
    prompt: "Generate creative ideas for an Instagram post based on the following theme or product. Include a visually descriptive concept for the image or video, a catchy caption (under 125 characters), and a set of 5-7 relevant hashtags. Ensure the post idea is engaging, on-brand, and likely to resonate with Instagram users. Theme or product:"
  },
  {
    icon: FaInstagram,
    title: "Instagram Caption Generator",
    content: "Generate engaging captions for your Instagram posts.",
    link: "instagram-caption",
    prompt: "Create 3 engaging Instagram captions for a post with the following image description or theme. Each caption should be 125 characters or less, include an attention-grabbing opening, and end with a call-to-action or question to encourage engagement. Consider using emojis sparingly to enhance the message. Image description or theme:"
  }
];

const ContentGenerationPage: React.FC = () => {
  const { link } = useParams<{ link: string }>();
  const cardInfo = cardData.find(card => card.link === link);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  if (!cardInfo) {
    return <div>Card not found</div>;
  }

  const Icon = cardInfo.icon;

  const getInputLabels = (title: string) => {
    if (title.toLowerCase().includes('youtube')) {
      return ['Enter your YouTube video title', 'Enter your YouTube video outline (optional)'];
    } else if (title.toLowerCase().includes('blog')) {
      return ['Enter your blog topic', 'Enter key points (optional)'];
    } else if (title.toLowerCase().includes('instagram')) {
      return ['Enter your Instagram post theme', 'Enter image description (optional)'];
    } else {
      return ['Enter your content title', 'Enter additional details (optional)'];
    }
  };

  const inputLabels = getInputLabels(cardInfo.title);

  const [editorContent, setEditorContent] = useState('Your result will appear here');

  function cleanupContent(text:string) {
    const lines = text.split('\n');
    let isFirstLine = true;
    
    return lines.map((line) => {
      // Remove asterisks
      line = line.replace(/\*\*/g, '').replace(/\*/g, '').trim();
      
      // Make the first line (heading) bold
      if (isFirstLine) {
        line = `<strong>${line}</strong>`;
        isFirstLine = false;
      }
      
      // Add extra line break after numbered items
      if (/^\d+\./.test(line)) {
        line += '<br><br>';
      }
      
      return line;
    }).join('<br>');
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(editorContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const generateContent = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const finalPrompt = `${cardInfo.prompt}\nTitle: ${title}\nDetails: ${details}`;
    try {
      const result = await chatSession.sendMessage(finalPrompt);
      const cleanedContent = cleanupContent(result.response.text());
      setEditorContent(cleanedContent);
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div 
        className="w-11/12 h-[85vh] bg-white rounded-xl border border-1 border-purple-300 shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex h-full">
          <motion.div 
            className="w-2/5 bg-white p-8 overflow-y-auto border-r border-purple-200"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="text-4xl text-purple-600 mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Icon />
            </motion.div>
            <motion.h2 
              className="text-2xl font-bold mb-4 text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {cardInfo.title}
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {cardInfo.content}
            </motion.p>
            <motion.form 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onSubmit={generateContent}
            >
              <div>
                <label className="block text-sm font-medium text-purple-700">{inputLabels[0]}</label>
                <input 
                  type="text" 
                  className="mt-1 block w-full rounded-md border border-1 border-purple-300 shadow-sm focus:ring focus:ring-purple-500 focus:ring-opacity-50" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-700">{inputLabels[1]}</label>
                <textarea 
                  className="mt-1 block w-full rounded-md border border-1 border-purple-300 shadow-sm focus:ring focus:ring-purple-500 focus:ring-opacity-50" 
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
              >
                {loading ? 'Generating...' : 'Generate Content'}
              </motion.button>
            </motion.form>
          </motion.div>
          <motion.div 
            className="w-3/5 p-8 bg-white shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-purple-800">Your Result</h3>
              <motion.button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-md text-white ${copied ? 'bg-green-500' : 'bg-purple-600'} hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCopy className="mr-2" />
                {copied ? 'Copied!' : 'Copy'}
              </motion.button>
            </div>
            <div className="border border-purple-200 rounded-lg overflow-hidden">
              <ReactQuill
  theme="snow"
  value={editorContent}
  onChange={setEditorContent}
  style={{height: '400px'}}
  modules={{
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }}
  formats={[
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]}
/>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContentGenerationPage;