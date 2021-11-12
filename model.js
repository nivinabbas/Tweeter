function Tweeter() {
  const _dummyData = [
    {
      text: 'First post!',
      id: 'p1',
      comments: [
        { id: 'c1', text: 'First comment on first post!' },
        { id: 'c2', text: 'Second comment on first post!!' },
        { id: 'c3', text: 'Third comment on first post!!!' },
      ],
    },
    {
      text: 'Aw man, I wanted to be first',
      id: 'p2',
      comments: [
        {
          id: 'c4',
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: 'c5', text: 'Yeah, believe in yourself!' },
        { id: 'c6', text: 'Haha second place what a joke.' },
      ],
    },
  ];

  let postIdCounter = 3;
  let commentIdCounter = 7;

  const getPosts = () => {
    return _dummyData;
  };

  const addPost = (newPost) => {
    let addNewPost = { text: newPost, id: 'p' + postIdCounter, comments: [] };
    _dummyData.push(addNewPost);
    postIdCounter++;
  };

  const removePost = (postID) => {
    let i = 0;
    for (const element of _dummyData) {
      if (postID == element.id) _dummyData.splice(i, 1);
      i++;
    }
  };

  function addComment(text, postID) {
    let newComment = { id: 'c' + commentIdCounter, text: text };
    for (const element of _dummyData) {
      if (postID == element.id) element.comments.push(newComment);
      commentIdCounter++;
    }
  }

  const removeComment = (postID, commentID) => {
    let i = 0;
    for (const element of _dummyData) {
      if (postID == element.id) {
        for (const ele of element.comments) {
          if (ele.id == commentID) {
            i++;
            element.comments.splice(i, 1);
          }
        }
      }
    }
  };
  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  };
}

const tweeter = Tweeter();

tweeter.addPost('This is my own post!');
tweeter.addComment('nenenne', 'p1');
tweeter.removePost('p1');
tweeter.removeComment('p2', 'c5');
console.log(tweeter.getPosts());
