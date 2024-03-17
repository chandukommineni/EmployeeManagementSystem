package management.EMS.services;

import management.EMS.models.EmployeeModel;
import management.EMS.repositories.employeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.lang.reflect.Constructor;
import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    employeeRepository repo;
    public ResponseEntity<List<EmployeeModel>> getDetails(){
        return new ResponseEntity<>(repo.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<EmployeeModel> deleteDetails(int id){
        repo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public ResponseEntity<EmployeeModel> setDetails(EmployeeModel obj){
        return  new ResponseEntity<>(repo.save(obj),HttpStatus.OK);
    }

    public ResponseEntity<EmployeeModel> updateDetails(EmployeeModel obj,int id){
        EmployeeModel emp=repo.findById(id).orElse(null);
        if (emp!=null){
            obj.setId(id);

            return new ResponseEntity<>(repo.save(obj),HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
