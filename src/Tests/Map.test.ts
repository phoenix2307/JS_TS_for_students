import {createGreetingMessages, ManType} from "./Map";

let people: Array<ManType> = []

beforeEach( () => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
})

test('should get array og greeting messages', () => {
    const messages = createGreetingMessages(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hi Andrew. Welcome to IT=Incubator')
    expect(messages[1]).toBe('Hi Alexander. Welcome to IT=Incubator')
    expect(messages[2]).toBe('Hi Dmitry. Welcome to IT=Incubator')
})