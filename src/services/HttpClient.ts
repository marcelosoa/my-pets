
class HttpClient {
  async get (path: string) {
    return this.makeRequest(path, { method: 'GET' })
  }

  async post (path: string, body: any) {
    return this.makeRequest(path, {
      method: 'POST',
      body
    })
  }

  async update (id: any, path: string, body: any) {
    return this.makeRequest(`${path}/${id}`, {
      method: 'PUT',
      body
    })
  }

  async delete (id: any, path: string, body: any) {
    return this.makeRequest(`${path}/${id}`, {
      method: 'DELETE',
      body
    })
  }

  async makeRequest (path: string, options: any) {
    const headers = new Headers()

    if (options.body) {
      headers.append('Content-Type', 'application/json')
    }
    const response = await fetch(`http://localhost:3002${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
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
}

export default new HttpClient()
