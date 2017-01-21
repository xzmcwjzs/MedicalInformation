using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Comm_OperationMap : EntityTypeConfiguration<Chronic_disease_Comm_Operation>
    {
        public Chronic_disease_Comm_OperationMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.names)
                .HasMaxLength(50);

            this.Property(t => t.sex)
                .HasMaxLength(50);

            this.Property(t => t.age)
                .HasMaxLength(50);

            this.Property(t => t.id_card_number)
                .HasMaxLength(50);

            this.Property(t => t.address)
                .HasMaxLength(50);

            this.Property(t => t.phone)
                .HasMaxLength(50);

            this.Property(t => t.diag_bj1)
                .HasMaxLength(50);

            this.Property(t => t.diag_mj1)
                .HasMaxLength(50);

            this.Property(t => t.diag_name1)
                .HasMaxLength(50);

            this.Property(t => t.numb1)
                .HasMaxLength(50);

            this.Property(t => t.doctor1)
                .HasMaxLength(50);

            this.Property(t => t.diag_bj2)
                .HasMaxLength(50);

            this.Property(t => t.diag_mj2)
                .HasMaxLength(50);

            this.Property(t => t.diag_name2)
                .HasMaxLength(50);

            this.Property(t => t.numb2)
                .HasMaxLength(50);

            this.Property(t => t.doctor2)
                .HasMaxLength(50);

            this.Property(t => t.diag_bj3)
                .HasMaxLength(50);

            this.Property(t => t.diag_mj3)
                .HasMaxLength(50);

            this.Property(t => t.diag_name3)
                .HasMaxLength(50);

            this.Property(t => t.numb3)
                .HasMaxLength(50);

            this.Property(t => t.doctor3)
                .HasMaxLength(50);

            this.Property(t => t.diag_bj4)
                .HasMaxLength(50);

            this.Property(t => t.diag_mj4)
                .HasMaxLength(50);

            this.Property(t => t.diag_name4)
                .HasMaxLength(50);

            this.Property(t => t.numb4)
                .HasMaxLength(50);

            this.Property(t => t.doctor4)
                .HasMaxLength(50);

            this.Property(t => t.diag_bj5)
                .HasMaxLength(50);

            this.Property(t => t.diag_mj5)
                .HasMaxLength(50);

            this.Property(t => t.diag_name5)
                .HasMaxLength(50);

            this.Property(t => t.numb5)
                .HasMaxLength(50);

            this.Property(t => t.doctor5)
                .HasMaxLength(50);

            this.Property(t => t.type)
                .HasMaxLength(50);

            this.Property(t => t.worker)
                .HasMaxLength(50);

            this.Property(t => t.community_code)
                .HasMaxLength(50);

            this.Property(t => t.resident_id)
                .HasMaxLength(50);

            this.Property(t => t.permanent_home_commitcode)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Comm_Operation");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.names).HasColumnName("names");
            this.Property(t => t.sex).HasColumnName("sex");
            this.Property(t => t.age).HasColumnName("age");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.address).HasColumnName("address");
            this.Property(t => t.phone).HasColumnName("phone");
            this.Property(t => t.data1).HasColumnName("data1");
            this.Property(t => t.diag_bj1).HasColumnName("diag_bj1");
            this.Property(t => t.diag_mj1).HasColumnName("diag_mj1");
            this.Property(t => t.diag_name1).HasColumnName("diag_name1");
            this.Property(t => t.numb1).HasColumnName("numb1");
            this.Property(t => t.doctor1).HasColumnName("doctor1");
            this.Property(t => t.data2).HasColumnName("data2");
            this.Property(t => t.diag_bj2).HasColumnName("diag_bj2");
            this.Property(t => t.diag_mj2).HasColumnName("diag_mj2");
            this.Property(t => t.diag_name2).HasColumnName("diag_name2");
            this.Property(t => t.numb2).HasColumnName("numb2");
            this.Property(t => t.doctor2).HasColumnName("doctor2");
            this.Property(t => t.data3).HasColumnName("data3");
            this.Property(t => t.diag_bj3).HasColumnName("diag_bj3");
            this.Property(t => t.diag_mj3).HasColumnName("diag_mj3");
            this.Property(t => t.diag_name3).HasColumnName("diag_name3");
            this.Property(t => t.numb3).HasColumnName("numb3");
            this.Property(t => t.doctor3).HasColumnName("doctor3");
            this.Property(t => t.data4).HasColumnName("data4");
            this.Property(t => t.diag_bj4).HasColumnName("diag_bj4");
            this.Property(t => t.diag_mj4).HasColumnName("diag_mj4");
            this.Property(t => t.diag_name4).HasColumnName("diag_name4");
            this.Property(t => t.numb4).HasColumnName("numb4");
            this.Property(t => t.doctor4).HasColumnName("doctor4");
            this.Property(t => t.data5).HasColumnName("data5");
            this.Property(t => t.diag_bj5).HasColumnName("diag_bj5");
            this.Property(t => t.diag_mj5).HasColumnName("diag_mj5");
            this.Property(t => t.diag_name5).HasColumnName("diag_name5");
            this.Property(t => t.numb5).HasColumnName("numb5");
            this.Property(t => t.doctor5).HasColumnName("doctor5");
            this.Property(t => t.create_time).HasColumnName("create_time");
            this.Property(t => t.type).HasColumnName("type");
            this.Property(t => t.worker).HasColumnName("worker");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
            this.Property(t => t.permanent_home_commitcode).HasColumnName("permanent_home_commitcode");
        }
    }
}
