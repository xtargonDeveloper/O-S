import Cookies from 'universal-cookie';
const cookies = new Cookies();

var UserProfile = (function() {
    var full_name = "";
  
    var getName = function() {
      full_name = cookies.get('userSession');
      return full_name; 
    };
  
    var setName = function(name) {
      full_name = name;     
      cookies.set('userSession', full_name, { path: '/' });
    };
  
    return {
      getName: getName,
      setName: setName
    }
  
  })();
  
  export default UserProfile;