/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */

import { Component, Input } from '@angular/core';

/**
 * A smaller view for showing a batch as a list item.
 */
@Component({
  selector: 'batch-list-item',
  templateUrl: './batch-list-item.component.html',
  styleUrls: [
    './batch-list-item.component.scss',
    '../../../styles/shared/_explorer-list-item.scss'
  ]
})
export class BatchListItemComponent {

    // data representing the transaction
  @Input() data: object;

}
