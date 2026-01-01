import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");

  const [blogImage, setBlogImage] = useState("");
  const [blogImagePreview, setBlogImagePreview] = useState("");

  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBlogImagePreview(reader.result);
      setBlogImage(file);
    };
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("about", about);
    formData.append("blogImage", blogImage);

    try {
      const { data } = await axios.post(
        "http://localhost:4001/api/blogs/create",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success(data.message || "Blog posted successfully");
      setTitle("");
      setCategory("");
      setAbout("");
      setBlogImage("");
      setBlogImagePreview("");
    } catch (error) {
      toast.error(error.message || "Please fill all required fields");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-14 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Create New Blog
          </h1>
          <p className="text-gray-500 mt-2">
            Share your thoughts with the world
          </p>
        </div>

        <form onSubmit={handleCreateBlog} className="space-y-6">
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
              <option value="" disabled>Select category</option>
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
              placeholder="Enter an attractive blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Image Upload */}
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
                Upload Image
                <input
                  type="file"
                  onChange={changePhotoHandler}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* About */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Blog Content
            </label>
            <textarea
              rows="6"
              placeholder="Write your blog content here..."
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateBlog;
