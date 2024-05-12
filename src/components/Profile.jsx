import s from './Profile.module.css'

function Profile() {
   return (
         <div className={s.content}>
          <div>
          <img src='https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?format=pjeg&auto=webp&crop=16:9' />
          </div>
          <div>
            ava + desc
          </div>
          <div>
            My posts
            <div className={s.item}>
              Post1
            </div>
            <div className={s.item}>
              Post2
            </div>
          </div>
        </div>
   )
}

export default Profile