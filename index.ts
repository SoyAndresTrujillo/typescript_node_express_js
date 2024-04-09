function asincrona(callback) {
  setTimeout(() => {
      try {
          let a = 3 + w; // TypeScript inmediatamente marca el error, por lo que esta implementación es solo un ejemplo de como seria con js puro
          callback(null, a)
      } catch (error) {
          callback(error)
      }
  }, 1000)
}

asincrona((err, dato) => {
  if (err) {
      console.error('Tenemos un error')
      console.error(err)
      return false

      // throw err
  }

  console.log(`Todo ha ido bien, mi dato es ${dato}`)
})