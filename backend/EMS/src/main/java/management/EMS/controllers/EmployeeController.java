package management.EMS.controllers;

import management.EMS.models.EmployeeModel;
import management.EMS.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class EmployeeController {
    @Autowired
    EmployeeService service;
    @GetMapping("emp")
    public ResponseEntity<List<EmployeeModel>> getData(){
        return service.getDetails();
    }

    @PostMapping("emp")
    public ResponseEntity<EmployeeModel> setData(@RequestBody EmployeeModel obj){
        return service.setDetails(obj);
    }

    @PutMapping("emp/{id}")
    public ResponseEntity<EmployeeModel> updateData(@RequestBody EmployeeModel obj,@PathVariable  int id){
        return service.updateDetails(obj,id);
    }

    @DeleteMapping("emp/{id}")
    public ResponseEntity<EmployeeModel> deleteData(@PathVariable int id){
        return service.deleteDetails(id);
    }


}
