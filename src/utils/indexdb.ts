interface IObjectStore {
  name: string,
  unique: boolean
}
class Database {

  public db: any = null
  public request: any = null

  connect(dbName: string, version: number = 1) {
    return new Promise((resolve, reject) => {
      this.request = window.indexedDB.open(dbName, version)
      this.request.onsuccess = (e: EventTarget) => {
        this.db = this.request.result
        resolve(e)
        this.success(e, '数据库打开成功')
      }
      this.request.onerror = (e: EventTarget) => {
        reject(e)
        this.error(e, '数据库打开报错')
      }
      this.request.onupgradeneeded = (e: any) => {
        this.db = e.target.result
        resolve(e)
        this.success(null, '数据库升级成功')
      }
    })
  }
  upgrad(e: any) {
    this.db = e.target.result
  }
  add(sql: string, value: any) {
    const request = this.db.transaction([sql], 'readwrite')
      .objectStore(sql)
      .add(value)
    request.onsuccess = (e: any) => {
      this.success(e, '数据写入成功')
    }
    request.onerror = (e:  any) => {
      this.error(e, '数据写入失败')
    }
  }
  get(sql: string, value: any) {
    return new Promise((resolve, reject) => {
      const request = this.db
        .transaction([sql])
        .objectStore(sql)
        .get(value)
      request.onsuccess = () => {
        resolve(request.result)
        this.success.call(this, request.result, '')
      }
      request.onerror = this.error.call(this, '获取失败', '')
    })
  }
  update(sql: string, value: any) {
    const request = this.db
      .transaction([sql], 'readwrite')
      .objectStore(sql)
      .put(value)
    request.onsuccess = this.success.call(this, '数据更新成功', '')
    request.onerror = this.error.call(this, '数据更新失败', '')
  }
  delete(sql: string, value: any) {
    const request = this.db
      .transaction([sql], 'readwrite')
      .objectStore(sql)
      .delete(value)
    request.onsuccess = this.success.call(this, '数据删除成功', '')
    request.onerror = this.error.call(this, '数据删除失败', '')
  }
  cursor(tableName: any) {
    return new Promise((resolve, reject) => {
      if (this.hasObjectStoreNames(tableName)) {
        const request = this.db
          .transaction([tableName])
          .objectStore(tableName)
          .openCursor()
        request.onsuccess = (e: any) => {
          resolve(e.target.result)
          this.success(e, '遍历表数据成功')
        }
        request.onerror = (e: any) => {
          reject(e)
          this.error(e, '遍历表数据失败')
        }
      } else {
        reject('表不存在')
      }
    })
  }
  createIndex(sql: string, value: any) {
    this.db
      .transaction([sql], 'readonly')
      .objectStore(sql)
      .index(value)
  }
  getIndex(sql: string, key: any, value: any) {
    return new Promise((resolve, reject) => {
      const request = this.db
        .transaction([sql], 'readonly')
        .objectStore(sql)
        .index(key)
        .get(value)
      request.onsuccess = (e: any) => {
        const result = e.target.result
        if (result) {
            resolve(result)
        } else {
            reject(e)
        }
      }
      request.onerror = (e: any) => {
        reject(e)
        this.error.call(this, '获取索引失败', '')
      }
    })
  }

  hasObjectStoreNames(name: string) {
    if (this.db.objectStoreNames.contains(name)) {
      this.success(null, `${name} 表已存在`)
      return true
    } else {
      this.error(null, `${name} 表不存在`)
      return false
    }
  }

  create(name: string, data: IObjectStore[], options: any) {
    if (!this.db.objectStoreNames.contains(name)) {
      let objectStore: any = null
      if (options.keyPath) {
        objectStore = this.db.createObjectStore(name, { keyPath: options.keyPath })
      } else {
        objectStore = this.db.createObjectStore(name, { autoIncrement: true })
      }
      data.forEach((item) => {
        const name: string = item.name
        const unique: boolean = item.unique
        objectStore.createIndex(name, name, { unique })
      })
    }
  }

  success(e: EventTarget | any, message: string) {
    console.log(e, message || 'success')
  }
  error(e: EventTarget | any, message: string) {
    console.log(e, message || 'error')
  }
}

export default Database