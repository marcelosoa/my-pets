import HttpClient from './HttpClient'

class PetsService {
  async listPets (orderBy: string = 'asc') {
    return await HttpClient.get(`/pets?orderBy=${orderBy}`)
  }

  async createPet (pet: any) {
    return await HttpClient.post('/pets/', pet)
  }

  async updatePets (id: any, updatedPet: any) {
    return await HttpClient.update(id, '/pets', updatedPet)
  }

  async deletePets (id: string, deletePet: any) {
    return await HttpClient.delete(id, '/pets', deletePet)
  }
}

export default new PetsService()
