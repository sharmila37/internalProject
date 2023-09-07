import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  employee: any = {}; 
  username:any='';
data:any=[];
datas: any[] = [];
editing = false;
  content: string = '';
  editedContent: string = '';
  editedItemId:any;

  constructor(public auth:ServiceService) {}
  getcall() {
    this.auth.getdata().subscribe((result) => {
      this.data = result;
    });
    this.getcall();
  }
  onSave() {
    const employeeData = {
      name: this.employee.name,
      qualification: this.employee.qualification,
      project: this.employee.project,
      experience: this.employee.experience
    };
  
    this.auth.postid(employeeData).subscribe((result) => {
      console.log('Employee data posted successfully', result);
      alert('Employee data posted successfully');
      this.reset();
    });
    this.getcall();
    
  }
  reset() {
    throw new Error('Method not implemented.');
  }
  onUpdate() {
    const updatedData = {
      name: 'Updated Name',
      qualification: 'Updated Qualification',
      project: 'Updated Project',
      experience: 'Updated Experience'
    };
  
    this.auth.updateid(updatedData).subscribe((result) => {
      console.log('Employee data updated successfully', result);
    });
  }
  onDelete(qualification: any) {
    this.auth.deleteid(qualification).subscribe((result) => {
      console.log(result);
      alert('Employee data deleted successfully')
    });
  }
  updateContent() {
    if (this.editedItemId !== null) {
      const itemToUpdate = this.data.find(this.editedItemId);
      if (itemToUpdate) {
        itemToUpdate.content = this.editedContent;
      }
      this.editing = true;
      this.editedContent = '';
      this.editedItemId = null;
    }
  }
  onSubmit(action: string, id?: number) {
      if (action === 'edit') {
        
        this.editing = true;
      } else if (action === 'delete') {
         if (id) {
        }
      }
    }
 

  }




