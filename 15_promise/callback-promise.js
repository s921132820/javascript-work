function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 1초 뒤 실행 할 내용
      try {
        const idol = {
          id : userId,
          name : '장원영',
        }
        resolve(idol) ;
      } catch (error) {
        reject(error)
      }
    }, 1000);
  })
}

// 게시글 얻어오기
function getArticle(articleId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
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
      } catch (error) {
        reject(error);
      }
    }, 1000);
  })
}

// 답글
function getComments(commentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
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
      } catch (error) {
        reject(error);
      }
    }, 1000)
  })
}

// async : 비동기, await
// 늘 같이 다니는 짝
// 비동기라는걸 명시적으로 알려주기 위해 사용함

getUser(1)
  .then((x) => {
    console.log(x);
    return getArticle(x.id);
  })
  .then((article) => {
    console.log(article);
    return getComments(article[0].id);
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((error) => {
    console.log('Error');
  })
  .finally(() => console.log('Finally'));

  async function runPromise() {
    await getUser(2)
      .then((user)=>{
        if(user != null) {
          console.log('user : ', user);
        } else {
          console.log('자료가 없어요');
        }
      })
  }

  runPromise();