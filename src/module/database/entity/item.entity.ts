import { Column, Entity, ManyToOne, OneToMany, RelationId } from 'typeorm';
import { RowEntity } from './shared/row.entity';
import { DirectionEntity } from './direction.entity';
import { ProjectEntity } from './project.entity';
import { UserEntity } from './user.entity';
import { TimeTrackingEntity } from './time-tracking.entity';
import { Type } from 'class-transformer';

@Entity('item')
export class ItemEntity extends RowEntity<ItemEntity> {
  @Column({ type: 'varchar', nullable: false, length: 10000 })
  name: string;

  @Column({ type: 'varchar', nullable: false, length: 255 })
  youtrackId: string;

  @Column({ type: 'numeric', nullable: true })
  estimationTime?: number;

  @Column({ type: 'numeric', nullable: true })
  spentTime?: number;

  @Column({ type: 'timestamp', nullable: true })
  @Type(() => Date)
  startDate?: Date;

  @Column({ type: 'timestamp', nullable: true })
  @Type(() => Date)
  endDate?: Date;

  @Column({ type: 'numeric', nullable: true })
  percent?: number;

  @Column({ type: 'integer', nullable: true })
  week?: number;

  @Column({ type: 'varchar', nullable: true, length: 2000 })
  comment?: string;

  @Column({ type: 'varchar', nullable: true, length: 2000 })
  link?: string;

  @RelationId((item: ItemEntity) => item.direction)
  @Column({ type: 'integer', nullable: true })
  directionId?: number;

  @ManyToOne(
    () => DirectionEntity,
    (direction: DirectionEntity) => direction.id,
  )
  direction?: DirectionEntity;

  @RelationId((item: ItemEntity) => item.project)
  @Column({ type: 'integer', nullable: true })
  projectId?: number;

  @ManyToOne(() => ProjectEntity, (project: ProjectEntity) => project.id)
  project?: ProjectEntity;

  @RelationId((item: ItemEntity) => item.assigneeUser)
  @Column({ type: 'integer', nullable: true })
  assigneeUserId?: number;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.id)
  assigneeUser?: UserEntity;

  @Column({ type: 'integer', nullable: true })
  updaterUserId?: number;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.id)
  updaterUser?: UserEntity;

  @RelationId((item: ItemEntity) => item.parentItem)
  @Column({ type: 'integer', nullable: true })
  parentItemId?: number;

  @ManyToOne(() => ItemEntity, (parentItem: ItemEntity) => parentItem.id)
  parentItem?: UserEntity;

  @OneToMany(() => TimeTrackingEntity, (track) => track.item)
  timeTracks?: TimeTrackingEntity[];
}
