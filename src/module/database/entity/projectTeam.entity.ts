import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { RowEntity } from './shared/row.entity';
import { UserEntity } from './user.entity';
import { ProjectInformationEntity } from './project_information.entity';
import { ProjectEntity } from './project.entity';

@Entity('project_team')
export class ProjectTeamEntity extends RowEntity<ProjectTeamEntity> {

  @Column({ type: 'varchar', nullable: false, length: 255 })
  name: string;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  hubId: string;

  @ManyToMany((type) => UserEntity, (user) => user.projectTeams, {
    onDelete: 'CASCADE',
  })
  @JoinTable({
    name: 'userProjectTeam',
    joinColumn: {
      name: 'userId',
    },
    inverseJoinColumn: {
      name: 'projectTeamId',
    },
  })
  users: UserEntity[];

  @OneToMany(
    () => ProjectEntity,
    (project) => project.projectTeam,
  )
  projects?: ProjectInformationEntity[];

}