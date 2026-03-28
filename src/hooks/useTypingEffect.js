import { useEffect, useState } from 'react'

const TYPING_DELAY = 90
const ERASING_DELAY = 50
const HOLD_DELAY = 1400

export const useTypingEffect = (words) => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return undefined

    const currentWord = words[index % words.length]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentWord.slice(0, text.length + 1)
          setText(nextText)

          if (nextText === currentWord) {
            setIsDeleting(true)
          }
        } else {
          const nextText = currentWord.slice(0, text.length - 1)
          setText(nextText)

          if (nextText === '') {
            setIsDeleting(false)
            setIndex((prev) => prev + 1)
          }
        }
      },
      !isDeleting && text === currentWord ? HOLD_DELAY : isDeleting ? ERASING_DELAY : TYPING_DELAY,
    )

    return () => clearTimeout(timeout)
  }, [index, isDeleting, text, words])

  return text
}
