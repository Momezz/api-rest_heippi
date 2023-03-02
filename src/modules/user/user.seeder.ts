import User from './user.model';
import log from '../../logger';

const users = [
  {
    _id: '6400d288708b1e4a5c2f21dc',
    name: 'Mathew Spencer',
    identification: '74292880403',
    email: 'immanuel_pfeffer@gmail.com',
    phone: '1-830-524-3426 x192',
    password: 'vKruEI2TlEnRLZx',
    role: 'HOSPITAL',
    isActive: true,
  }, {
    _id: '6400d288708b1e4a5c2f21dd',
    name: 'Nora Ledner',
    identification: '53780621745',
    email: 'liliana1@gmail.com',
    phone: '400.812.1435 x93025',
    password: 'Mkr_aZB0fpgpKZW',
    role: 'HOSPITAL',
    isActive: true,
  }, {
    _id: '6400d288708b1e4a5c2f21de',
    name: 'Rudy McDermott',
    identification: '96977449298',
    email: 'rosa_nikolaus27@yahoo.com',
    phone: '981.821.9930 x8267',
    password: 'dxCwkIsvQoxwKaS',
    role: 'DOCTOR',
    isActive: true,
  }, {
    _id: '6400d288708b1e4a5c2f21df',
    name: 'Ed Sporer',
    identification: '64851086419',
    email: 'dylan_kuphal23@gmail.com',
    phone: '(475) 678-1107',
    password: '6IkC5VWXH1Ljxam',
    role: 'HOSPITAL',
    isActive: true,
  }, {
    _id: '6400d288708b1e4a5c2f21e0',
    name: 'Marcos Streich',
    identification: '52479028810',
    email: 'kurtis_rogahn10@yahoo.com',
    phone: '(531) 201-3816 x421',
    password: 'WVLsxp7TtBhlKUy',
    role: 'HOSPITAL',
    isActive: true,
  }, {
    _id: '6400d288708b1e4a5c2f21e1',
    name: 'Monica Gottlieb',
    identification: '10764613238',
    email: 'bud_von@yahoo.com',
    phone: '794-375-5312 x4497',
    password: 'mem_JlIDm50g48b',
    role: 'PATIENT',
    isActive: true,
  }, {
    _id: '6400d288708b1e4a5c2f21e2',
    name: 'Audrey Bins',
    identification: '59001006976',
    email: 'chelsie.lebsack@hotmail.com',
    phone: '(315) 462-3979 x9165',
    password: 'yOn5LCOXIFge4wT',
    role: 'PATIENT',
    isActive: true,
  }, {
    _id: '6400d288708b1e4a5c2f21e3',
    name: 'Homer Jacobson',
    identification: '51795631333',
    email: 'alexanne_feest@gmail.com',
    phone: '482-576-2769 x6415',
    password: 'XCQCpLqeOBbsihG',
    role: 'DOCTOR',
    isActive: true,
  }, {
    _id: '6400d288708b1e4a5c2f21e4',
    name: 'Nicolas Nikolaus',
    identification: '64231486868',
    email: 'gayle_pollich87@yahoo.com',
    phone: '653-730-6106 x7083',
    password: 'u9EfHxtsg8NYbcM',
    role: 'DOCTOR',
    isActive: true,
  }, {
    _id: '6400d288708b1e4a5c2f21e5',
    name: "Stephen O'Conner",
    identification: '38607748860',
    email: 'caleb86@yahoo.com',
    phone: '825.690.7334 x1068',
    password: 'j5C_mgfXixlaTuL',
    role: 'DOCTOR',
  },
];

const seed = async () => {
  try {
    const usersData = await User.find({});

    if (usersData.length > 0) {
      return;
    }

    const result = await User.insertMany(users);
    log.info(`User model, successfully seed: ${result.length} documents`);
  } catch (error: any) {
    log.error(error);
  }
};

export default seed;
