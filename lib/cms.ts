const delay = (ms: number) => {
  return new Promise( (res, rej) => {
       setTimeout(res, ms)
   })
}

export const getAllPosts = async () => {
   await delay(3000)

   return new Array(10).fill(1).map( (_, i) => {
       return {
           title: `some title ${i}`,
           slug: `some-slug-${i}`,
           body: 'lorem ipsum...'
       }
   } )
}