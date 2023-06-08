import { Pipe , PipeTransform} from '@angular/core'

@Pipe({
    name: 'UserName'
})

export class NamePipe implements PipeTransform {
    transform(value: { firstname: string, lastName: string}, locale: 'en' | 'fr' = 'fr'): string {
        return locale === 'fr' ? 
        `${value.lastName.toUpperCase()} ${value.firstname}` :
        `${value.firstname} ${value.lastName}`;
    }
}