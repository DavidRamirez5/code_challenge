class StudentService{
    static getStudents(students){
        return students;
    }
    static getEmailsWithCertification(students){
        const studentswithCertification =students.filter(student => student.haveCertification ===  true)
        return studentswithCertification.map(student => student.email)
    }
}

module.exports = StudentService;