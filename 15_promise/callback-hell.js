// 콜백지옥 callback-hell
function getUser(userId, callback) {
  setTimeout(() => {
    // 1초 뒤 실행 할 내용
    const idol = {
      id : userId,
      name : '장원영',
    }
    callback(idol);
  }, 1000);
}

// 게시글 얻어오기
function getArticle(articleId, callback) {
  setTimeout(() => {
    const articles = [
      {
        id : 1,
        title : '장원영 첫 글',
      },
      {
        id : 2,
        title : '장원영 두번째 글',
      }
    ];
    callback(articles);
  }, 1000);
}

// 답글
function getComments(commentId, callback) {
  setTimeout(() => {
    const comments = [
      {
        id : 1,
        comment : '장원영 첫 댓글',
      },
      {
        id : 2,
        comment : '장원영 두번째 댓글',
      },
      {
        id : 3,
        comment : '장원영 세번째 댓글',
      }
    ];
  }, 1000)
}

getUser(1, (result) => {
  console.log('idol : ' , result);
  getArticle(result.id, (articles) => {
    console.log('게시글 목록' , articles);
    getComments(articles[0].id, (comments) => {
      console.log('댓글 : ', comments)
    })
  })
})