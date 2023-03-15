const myArr = [
  { name: "name1", text: "post1" },
  { name: "name2", text: "post2" },
  { name: "name3", text: "post3" },
];

const arrList = (myArr) => {
  for (let i of myArr) {
    console.log(i);
  }
};

const newPost = async (data) => {
  try {
    await myArr.push(data);
    arrList(myArr);
  } catch (err) {
    console.log(err);
  }
};

newPost({ name: "name4", text: "text4" });
