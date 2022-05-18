class StudentService{
    static getStudents(students){
        return students;
    }
    static getEmailsWithCertification(students){
        const studentswithCertification =students.filter(student => student.haveCertification ===  true);
        return studentswithCertification.map(student => student.email);
    }
    static studentCredits(students,credits){
        return students.filter(student => student.credits >= credits);
    }
}

module.exports = StudentService;