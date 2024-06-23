export const getImageUrl = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const url =
      "https://api.imgbb.com/1/upload?key=b02c95317412f6986e378e6745515456";

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image to the API.");
    }

    const data = await response.json();
    return data.data.display_url;
  } catch (error) {
    console.error("Error in getImageUrl:", error);
    return null; // Return null or throw an error, depending on your use case
  }
};
