import { Story, Post } from '@/shared/types'

export const story: Story = {
  author: {
    isOnline: true,
    name: '4ch',
  },
}

export const stories: Story[] = []

for (let i = 0; i < 5; i++) {
  stories.push(story)
}

export const post: Post = {
  author: {
    isOnline: true,
    name: '4ch',
  },
  publicationDatetime: new Date(),
  text: `В Осиповичах мужчина упал с балкона.

  Прибывшие к месту вызова работники МЧС обнаружили мужчину лежащим на крыше магазина, пристроенного к дому, на уровне второго этажа.
  
  Мужчина 1955 г.р., пенсионер, проживает с супругой в этом же доме на 5 этаже. С его слов, он вышел на балкон покурить, почувствовал головокружение и упал вниз.
  
  Работники МЧС оказали пострадавшему первую медицинскую помощь и передали бригаде скорой медицинской помощи.
  
  Мужчина госпитализирован с травмами.`,
  likesNumber: 3,
  commentsNumber: 0,
  repostsNumber: 0,
  views: 889,
  assets: [
    {
      type: 'image',
      url: 'https://sun1-94.userapi.com/impg/n-bJ_XDImnhuV_CpQfxlRA7da4RzwQ4vPAVRQA/ZOwkke-8W1Y.jpg?size=1071x1080&quality=96&sign=7a380b20294541f9e165489adf8c7396&type=album',
    },
  ],
}

export const posts: Post[] = [post, post]
