import ApiError from '../errors/ApiErrors'

class HttpClient {
  async get (path: string) {
    const response = await fetch(`http://localhost:3002${path}`)

    if (response.ok) {
      return response.json()
    }

    throw new Error(
      `${response.status} - ${response.statusText}`
    )
  }

  async getById (id: number) {
    const response = await fetch(`${id}`)
    return await response.json()
  }

  async post () {

  }

  async update (id: string) {

  }

  async delete (id: string) {

  }
}

export default new HttpClient()
