type CoursesType = {
    title: string
    price: number
}

export const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
];

const cheepPredicate = (course: CoursesType) => {
   return course.price < 160
}

const tasks = [
    {id:1, title: 'bread', isDone: false},
    {id:2, title: 'milk', isDone: true},
    {id:3, title: 'solt', isDone: false},
    {id:4, title: 'sugar', isDone: true},
    {id:5, title: 'papper', isDone: true},
]