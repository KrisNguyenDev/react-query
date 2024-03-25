import { Student, Students } from 'types/students.type'
import http from 'utils/http'

export const getStudents = (page: number | string, limit: number | string) => {
  return http.get<Students>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })
}

export const addStudents = (student: Omit<Student, 'id'>) => {
  return http.post<Student>('/students', student)
}
