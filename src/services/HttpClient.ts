class HttpClient {
  async get (path: string) {
    const response = await fetch(`http://localhost:3002${path}`)

    const body = await response.json()

    if (response.ok) {
      return body
    }

    throw new Error(body.error)
  }

  async getById (id: number) {
    const response = await fetch(`${id}`)
    return await response.json()
  }

  async post (pets: string) {
    const response = await fetch(`${pets}`)
    return await response.json()
  }

  async update (id: string) {

  }

  async delete (id: string) {

  }
}

export default new HttpClient()
