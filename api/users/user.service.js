const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
          `insert into users(name, email, password) 
                    values(?,?,?)`,
          [
            data.name,
            data.email,
            data.password
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      getUsers:callBack =>{
          pool.query(
              `select * from users`,
              [],
              (error, results, fields) => {
                if (error) {
                  callBack(error);
                }
                return callBack(null, results);
              }
          );
      },
      getUserByUserId: (id, callBack) =>{
        pool.query(
            `select * from users where id =?`,
            [id],
            (error, results, fields) => {
              if (error) {
                callBack(error);
              }
              return callBack(null, results[0]);
            }
        );
    },
    updateUser: (data, callBack) =>{
        pool.query(
            `update users set name=?,email=?,password=? where id =?`,
            [
                data.name,
                data.email,
                data.password,
                data.id
            ],
            (error, results, fields) => {
              if (error) {
                callBack(error);
              }
              return callBack(null, results[0]);
            }
        );
    },
    deleteUser: (data, callBack) =>{
        pool.query(
            `delete from users where id =?`,
            [data.id],
            (error, results, fields) => {
              if (error) {
               return callBack(error);
              }
              return callBack(null, results[0]);
            }
        );
    },
    getUserByUserEmail:(email, callBack) =>{
      pool.query(
        `select * from users where email = ?`,
        [email],
        (error, results, fields)=>{
          if(error){
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      )
    }
    
};