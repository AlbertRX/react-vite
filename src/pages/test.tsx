import storage from '@/utils/storage';
import request from '@/utils/request';

// 测试页面
const Test = () => {
  const handleStorage = (type: number) => {
    if (type === 1) {
      storage.set('set', { name: 'test', age: 18 });
    }
    if (type === 2) {
      storage.remove('set');
    }
    if (type === 3) {
      storage.get('set');
    }
    if (type === 4) {
      storage.clear();
    }
  };

  const onClick = async () => {
    await request
      .post('/user/login', {
        username: 'admin',
        password: '111111'
      })
      .then(res => {
        console.log('request->', res);
      });
  };

  return (
    <div>
      <button onClick={() => handleStorage(1)}>add</button>
      <button onClick={() => handleStorage(2)}>remove</button>
      <button onClick={() => handleStorage(3)}>get</button>
      <button onClick={() => handleStorage(4)}>clear</button>
      <button onClick={onClick}>request</button>
    </div>
  );
};
export default Test;
