import { Admin } from './admin.js';
import { User } from './user.js';

const user = new User("Иван", 28, false);
const admin = new Admin("Алексей", 30, true, true);
user.show();
admin.show();

user.name = "Иван Обновл.";
user.age = 29;
user.isAdmin = false;
user.show();

user.name = 123;
admin.canBanUsers = "yes";

console.log("До makeAdmin():", user.isAdmin);
user.makeAdmin();
console.log("После makeAdmin():", user.isAdmin);

const userClone = User.clone(user);
const adminClone = Admin.clone(admin);
console.log("userClone === user:", userClone === user);
console.log("adminClone === admin:", adminClone === admin);
userClone.name = "Клон пользователя";
adminClone.canBanUsers = false;
console.log("Оригиналы не меняются:");
user.show();
admin.show();

const adminRef = admin.copy();
console.log("adminRef === admin:", adminRef === admin);
adminRef.name = "Админ через ссылку";
admin.show();

const temp = new User("Временный", 20, false);
temp.show();
temp.delete();
console.log("После delete имя:", temp.name || 'недоступно');

