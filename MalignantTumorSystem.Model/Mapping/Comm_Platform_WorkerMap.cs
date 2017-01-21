using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
  public  class Comm_Platform_WorkerMap:EntityTypeConfiguration<Entities.Comm_Platform_Worker>
    {
      public Comm_Platform_WorkerMap()
      {
          // Primary Key
          this.HasKey(t => new { t.id }).Property(t=>t.id).HasMaxLength(50).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

          // Properties
          this.Property(t => t.id)
              .IsRequired();

          this.Property(t => t.user_name)
              .IsRequired()
              .HasMaxLength(50);

          this.Property(t => t.password)
              .IsRequired()
              .HasMaxLength(50);

          this.Property(t => t.real_name)
              .HasMaxLength(50);

          this.Property(t => t.region_code)
              .HasMaxLength(50);

          this.Property(t => t.company)
              .HasMaxLength(50);

          this.Property(t => t.department)
              .HasMaxLength(50);

          this.Property(t => t.company_code)
              .HasMaxLength(50);

          this.Property(t => t.company_classfy)
              .HasMaxLength(50);

          this.Property(t => t.manager_power)
              .HasMaxLength(50);

          this.Property(t => t.login_power)
              .HasMaxLength(500);

          this.Property(t => t.id_card_number)
              .HasMaxLength(50);

          this.Property(t => t.phone)
              .HasMaxLength(50);

          this.Property(t => t.email)
              .HasMaxLength(50);

          this.Property(t => t.weixin)
              .HasMaxLength(50);

          this.Property(t => t.qq)
              .HasMaxLength(50);

          this.Property(t => t.system_power)
              .HasMaxLength(50);

          // Table & Column Mappings
          this.ToTable("Comm_Platform_Worker");
          this.Property(t => t.id).HasColumnName("id");
          this.Property(t => t.user_name).HasColumnName("user_name");
          this.Property(t => t.password).HasColumnName("password");
          this.Property(t => t.real_name).HasColumnName("real_name");
          this.Property(t => t.region_code).HasColumnName("region_code");
          this.Property(t => t.company).HasColumnName("company");
          this.Property(t => t.department).HasColumnName("department");
          this.Property(t => t.company_code).HasColumnName("company_code");
          this.Property(t => t.company_classfy).HasColumnName("company_classfy");
          this.Property(t => t.manager_power).HasColumnName("manager_power");
          this.Property(t => t.login_power).HasColumnName("login_power");
          this.Property(t => t.id_card_number).HasColumnName("id_card_number");
          this.Property(t => t.phone).HasColumnName("phone");
          this.Property(t => t.email).HasColumnName("email");
          this.Property(t => t.weixin).HasColumnName("weixin");
          this.Property(t => t.qq).HasColumnName("qq");
          this.Property(t => t.create_time).HasColumnName("create_time");
          this.Property(t => t.system_power).HasColumnName("system_power");
      }
    }
}
