import { Admin } from './admin.js';

const instances = [
    new Admin("Иван", 28, true, false),
    new Admin("Алексей", 30, true, true)
];

instances.forEach(instance => instance.show());