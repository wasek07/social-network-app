import s from './Post.module.css'

function Post() {
   return (
          <div>
            <div className={s.item}>
              <img src='https://fwcdn.pl/nph/875720/2023/47047_1.8.jpg'></img>
              Post1
              <div>
                <span>like</span>
              </div>
            </div>
          </div>
   )
}

export default Post