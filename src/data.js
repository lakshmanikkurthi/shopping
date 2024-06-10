let shopItemsData = [
    {
      id: "image1",
      name: "Casual Shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-1.jpg",
    },
    {
      id: "image2",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-2.jpg",
    },
    {
      id: "image3",
      name: "T Shirt",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-3.jpg",
    },
    {
      id: "image4",
      name: "Mens Suit",
      price: 300,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-4.jpg",
    },
    {
      id: "image5",
      name: "Mens Tie",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-5.png",
    },
    {
      id: "image6",
      name: "Casual shoes",
      price: 200,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-6.png",
    },
    {
      id: "image7",
      name: "black suit",
      price: 450,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-7.png",
    },
    {
      id: "image8",
      name: "polo shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-8.png",
    },
    {
      id: "image9",
      name: "denim shirt",
      price: 85,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-9.png",
    },
    {
      id: "image10",
      name: "denim pants",
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-10.png",
    },
    {
      id: "image11",
      name: "basic cap",
      price: 35,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-11.png",
    },
    {
      id: "image12",
      name: "leather boots",
      price: 350,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-12.png",
    },
  ];
  document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission
    
    const newImageId = document.getElementById('imageId').value;
    const newItemName = document.getElementById('itemName').value;
    const newItemPrice = parseFloat(document.getElementById('itemPrice').value);
    const newItemDesc = document.getElementById('itemDesc').value;
    const newItemImg = document.getElementById('itemImg').value;
  
    const newItem = {
      id: newImageId,
      name: newItemName,
      price: newItemPrice,
      desc: newItemDesc,
      img: newItemImg,
    };
  
    shopItemsData.push(newItem);
    
    // Display the updated items (this is a simplified example)
    console.log('Updated shopItemsData:', shopItemsData);
  });
  