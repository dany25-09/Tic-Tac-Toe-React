import '../index.css'
import {XFollowCard} from './XFollowCard'

function App() {

  const formatUserName = (userName) => `@${userName}`

  return(
    <section className='flex flex-col gap-4'>
      <XFollowCard userName='daniel25_garcia' formatUserName={formatUserName} initiallyFollowing={false}>
        Daniel García
      </XFollowCard>
      <XFollowCard userName='midudev' formatUserName={formatUserName} initiallyFollowing={true}>
        Miguel Angel Durán
      </XFollowCard>
    </section>
  )
}

export {App}