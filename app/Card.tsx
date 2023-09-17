import Image from 'next/image'
import Link from 'next/link'
import { MarkRead } from './Notification'

interface Notification {
  id: string
  read: boolean
  name: string
  avatar: string
  time: string
  sentence: string
  post?: string
  group?: string
  picture?: string
  privateMessage?: string
}

interface Props {
  notification: Notification
  markRead: MarkRead
}

export default function Card({
  notification,
  markRead,
}: Props): React.ReactNode {
  const {
    id,
    read,
    name,
    avatar,
    time,
    sentence,
    post,
    group,
    picture,
    privateMessage,
  } = notification

  return (
    <section
      className={`
            ${read ? '' : 'bg-very-light-grayish-blue'}
            text-dark-grayish-blue
            flex
            p-4
            gap-3
            rounded-2xl
        `}
      onClick={() => {
        markRead(id)
      }}
    >
      <Image
        className="self-start shrink-0"
        width={55}
        height={55}
        src={avatar}
        alt={`Avatar of ${name}`}
      />
      <div className="grow">
        <section className="flex justify-between gap-2">
          <p>
            <span className="font-extrabold text-very-dark-blue">{name}</span>
            {' ' + sentence + ' '}
            <Link
              href={group || post || ''}
              className="font-extrabold text-blue visited:text-dark-grayish-blue hover:text-blue"
            >
              {' '}
              {group || post}{' '}
            </Link>
            {
              // Red dot indicating unread
              !read && (
                <span className="inline-block h-2 w-2 bg-red ml-1 rounded-full align-middle"></span>
              )
            }
          </p>

          {picture && (
            <Link className="shrink-0" href={picture}>
              <Image
                className="self-start"
                src={picture}
                width="45"
                height="45"
                alt="picture commented"
              />
            </Link>
          )}
        </section>
        <p className="text-grayish-blue">{time}</p>

        {privateMessage && (
          <Link href={privateMessage}>
            <p className="border border-solid rounded-md border-light-grayish-blue-2 p-4 mt-3 hover:bg-light-grayish-blue-1">
              {privateMessage}
            </p>
          </Link>
        )}
      </div>
    </section>
  )
}
