const horse = {
    name: 'Bob',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

//Bad String code
let bio = horse.name + ' Is a ' + horse.size + ' horse skill is ' + horse.skills;

//Good String code
const {name, size, skills} = horse;
bio = '${name} Is a ${size}, horse skill is ${skills.join(' & ')}';

