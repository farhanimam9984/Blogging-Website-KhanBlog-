import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function UpdateBlog() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [blogImagePreview, setBlogImagePreview] = useState("");

  // Handle image selection
  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setBlogImagePreview(reader.result);
        setBlogImage(file);
      };
    }
  };

  // Fetch single blog details
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4001/api/blogs/single-blog/${id}`,
          { withCredentials: true }
        );
        setTitle(data?.title || "");
        setCategory(data?.category || "");
        setAbout(data?.about || "");
        setBlogImagePreview(data?.blogImage?.url || "");
      } catch (error) {
        toast.error("Unable to fetch blog details");
      }
    };
    fetchBlog();
  }, [id]);

  // Handle blog update
  const handleUpdate = async (e) => {
    e.preventDefault();

    // Validation
    if (!title || !category || !about) {
      return toast.error("Please fill all required fields");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("about", about);
    if (blogImage) formData.append("blogImage", blogImage);

    try {
      const { data } = await axios.put(
        `http://localhost:4001/api/blogs/update/${id}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success(data.message || "Blog updated successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update blog");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-14 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Update Blog</h1>
          <p className="text-gray-500 mt-2">Modify and improve your published blog</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          {/* Category */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select category</option>
              <option value="Devotion">Devotion</option>
              <option value="Sports">Sports</option>
              <option value="Coding">Coding</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Business">Business</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Blog Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Update blog title"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Blog Cover Image
            </label>
            <div className="border-2 border-dashed rounded-xl p-4 text-center">
              <img
                src={blogImagePreview || "/imgPL.webp"}
                alt="Preview"
                className="mx-auto mb-4 max-h-56 rounded-lg object-cover"
              />
              <label className="inline-block cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
                Change Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={changePhotoHandler}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Content */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Blog Content
            </label>
            <textarea
              rows="6"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Update your blog content"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            Update Blog
          </button>
        </form>
      </div>
    </section>
  );
}

export default UpdateBlog;
