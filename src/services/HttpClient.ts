
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

  async post (path: string, body: any) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    })
    const response = await fetch(`http://localhost:3002${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers
    })

    let responseBody = null
    const contentType = response.headers.get('Content-Type')
    if (contentType?.includes('application/json')) {
      responseBody = await response.json()
    }

    if (response.ok) {
      return responseBody
    }

    throw new Error(
      `${response.status} - ${response.statusText}`
    )
  }

  async update (id: string, path: string, body: any) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    })
    const response = await fetch(`http://localhost:3002/:${id}/${path}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers
    })

    let responseBody = null
    const contentType = response.headers.get('Content-Type')
    if (contentType?.includes('application/json')) {
      responseBody = await response.json()
    }

    if (response.ok) {
      return responseBody
    }

    throw new Error(
      `${response.status} - ${response.statusText}`
    )
  }

  async delete (id: string) {

  }
}

export default new HttpClient()
