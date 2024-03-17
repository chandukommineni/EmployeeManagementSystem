package management.EMS.repositories;

import management.EMS.models.EmployeeModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface employeeRepository extends JpaRepository<EmployeeModel, Integer> {
}
