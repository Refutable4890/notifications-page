'use client'
import Card from './Card'
import notificationsFromJSON from '@/data.json'
import { useState } from 'react'

export interface MarkRead {
  (id?: string): void
}

export default function Notification() {
  const [notifications, setNotifications] = useState(notificationsFromJSON)

  const markRead: MarkRead = function (id) {
    setNotifications((notifications) => {
      const newNotifications = [...notifications]
      if (!id) {
        newNotifications.forEach((notification) => {
          notification.read = true
        })
      } else {
        const notificationTarget = newNotifications.find(
          (notification) => notification.id === id,
        )
        if (notificationTarget) notificationTarget.read = true
      }

      return newNotifications
    })
  }

  let unreadNumber: number = 0
  notifications.forEach((notification) => {
    if (!notification.read) unreadNumber++
  })

  const cards: Array<ReturnType<typeof Card>> = []
  notifications.forEach((notification) => {
    cards.push(
      <Card
        key={notification.id}
        notification={notification}
        markRead={markRead}
      />,
    )
  })

  return (
    <section className="px-4 pb-4 bg-white max-w-screen-md mx-auto md:rounded-2xl md:shadow-xl">
      <div className="flex items-center justify-between py-6">
        <h2 className="font-extrabold text-2xl text-very-dark-blue">
          Notifications{' '}
          <span className="text-white text bg-blue px-3 rounded-lg ml-2">
            {unreadNumber}
          </span>
        </h2>

        <button
          className="text-grayish-blue hover:text-blue"
          onClick={() => {
            markRead()
          }}
        >
          Mark all as read
        </button>
      </div>

      <section className="flex flex-col gap-3">{cards}</section>
    </section>
  )
}
