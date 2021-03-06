import { Column, Entity, ManyToOne, OneToMany, RelationId } from 'typeorm';
import { RowEntity } from './shared/row.entity';
import { ItemEntity } from './item.entity';
import { ProjectInformationEntity } from './project-information.entity';
import { ProjectTeamEntity } from './project-team.entity';

@Entity('project')
export class ProjectEntity extends RowEntity<ProjectEntity> {
  @Column({ type: 'varchar', nullable: false, length: 255 })
  name?: string;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  youtrackId: string;

  @Column({ type: 'varchar', nullable: true, length: 50 })
  hubResourceId?: string;

  @Column({ type: 'boolean', default: false })
  isCommercial?: boolean;

  @OneToMany(() => ItemEntity, (itemEntity) => itemEntity.project)
  items?: ItemEntity[];

  @OneToMany(
    () => ProjectInformationEntity,
    (information) => information.project,
  )
  projectInformation?: ProjectInformationEntity[];

  @RelationId((project: ProjectEntity) => project.projectTeam)
  @Column({ type: 'integer', nullable: true })
  projectTeamId?: number;

  @ManyToOne(
    () => ProjectTeamEntity,
    (projectTeam: ProjectTeamEntity) => projectTeam.id,
  )
  projectTeam?: ProjectTeamEntity;
}
