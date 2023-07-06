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

  }

  async createPet (pet: any) {
    return await HttpClient.post('/pets/', pet)
  }

  async updatePets (id: string) {
    return await HttpClient.update(id)
  }

  async deletePets (id: string) {
    return await HttpClient.delete(id)
  }
}

export default new PetsService()
