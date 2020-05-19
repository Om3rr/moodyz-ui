export const languages = {}
export const strings = {}

const LANGS = {
    "he": {
        "header.hello": "שלום {name}",
        "gender.male": "זכר",
        "gender.female": "נקבה",
        "table.name": "שם",
        "table.gender": "מין",
        "table.link": "קישור",
        "copy": "העתק",
        "classes": "כיתות",
        "analytics": "אנליטיקה",
        "student.name": "שם התלמיד",
        "copied": "הועתק"
    },
    "en": {
        "header.hello": "hello {name}",
        "gender.male": "male",
        "gender.female": "female",
        "table.name": "name",
        "table.gender": "gender",
        "table.link": "link",
        "copy": "copy",
        "classes": "classes",
        "analytics": "analytics",
        "student.name": "student name",
        "copied": "Copied"
    }
}
export function currentLanguage() {
    return 'he-IL'
}

export function currentStrings() {
    return LANGS.he
}