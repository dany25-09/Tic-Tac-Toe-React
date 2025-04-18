import { useState } from 'react'
import clsx from 'clsx'

function XFollowCard({ userName = 'unknown', children, formatUserName, initiallyFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initiallyFollowing)

  const buttonClasses = clsx(
    'group',
    'cursor-pointer ml-4 rounded-full p-1.5 px-4 font-bold border-2 transition-colors duration-300 ease-in-out',
    isFollowing 
      ? 'w-[140px] bg-transparent text-white border-white hover:bg-[rgba(255,0,0,0.178)] hover:border-red-600 hover:text-red-600'
      : 'border-black text-gray-900 bg-white hover:opacity-85'
  )

  const ImageSrc = `https://unavatar.io/${userName}`

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  };

  return (
    <article className='flex justify-between items-center space text-white text-xs'>
      <header className='flex align-center gap-4'>
        <img 
          src={ImageSrc} 
          alt="Avatar de X" 
          className='w-12 h-12 rounded-3xl'
        />
        <div className='flex flex-col justify-center'>
          <strong>{children}</strong>
          <span className="text-gray-400">{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClasses}>
          <span className='block group-hover:hidden'>
            {isFollowing ? 'Siguiendo' : 'Seguir'}
          </span>
          <span className="hidden group-hover:block">
            {isFollowing ? 'Dejar de seguir' : 'Seguir'}
          </span>
        </button>
      </aside>
    </article>
  );
}

export {XFollowCard}


