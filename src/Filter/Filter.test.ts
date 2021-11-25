import {courses} from "./Filter";

test ('should take courses cheeper 160', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ]

    const cheepCourses = courses.filter(course => course.price < 160)

    expect(cheepCourses.length).toBe(2)
    expect(cheepCourses[0].title).toBe('CSS')
    expect(cheepCourses[1].title).toBe('REACT')

})

test('get only uncompleted tasks', () => {
    const tasks = [
        {id:1, title: 'bread', isDone: false},
        {id:2, title: 'milk', isDone: true},
        {id:3, title: 'solt', isDone: false},
        {id:4, title: 'sugar', isDone: true},
        {id:5, title: 'papper', isDone: true},
    ]

    const unCompletedTasks = tasks.filter(task => !task.isDone)

    expect(unCompletedTasks.length).toBe(2)
    expect(unCompletedTasks[1].title).toBe('solt')
    expect(unCompletedTasks[0].id).toBe(1)
})