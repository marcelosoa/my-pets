import path from 'path'
import HttpClient from './HttpClient'

interface PetProps {
  age: string
  category_id: string
  category_name: string
  color: string
  id: string
  name: string
  type: string
}
class PetsService {
  async listPets (orderBy: string = 'asc'): Promise<PetProps[]> {
    return await HttpClient.get(`/pets?orderBy=${orderBy}`)
  }

  async listPetById (id: number) {
    // const response = await fetch(`http://localhost:3002/pets?orderBy=${id}`)
    // const petList = await response.json()
    // return petList
  }

  async storePets (pets: string) {
    return await HttpClient.post(pets)
  }

  async updatePets (id: string) {
    return await HttpClient.update(id)
  }

  async deletePets (id: string) {
    return await HttpClient.delete(id)
  }
}

export default new PetsService()
