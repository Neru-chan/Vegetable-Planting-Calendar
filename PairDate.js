export class PairDate {
  constructor (m_begin, m_end, w_begin, w_end) {

    // if (!(m_begin instanceof Number)) throw new Error (`${m_begin} is not a Number!`)
    // if (!(m_end instanceof Number)) throw new Error (`${m_end} is not a Number!`)
    // if (!(d_begin instanceof Number)) throw new Error (`${d_begin} is not a Number!`)
    // if (!(d_end instanceof Number)) throw new Error (`${d_end} is not a Number!`)
      

    // if (m_begin < 0 || m_end < 0 || m_begin > 11 || m_begin > 11)
    //   throw new Error ("Month must be in range of [0...11]");

    this.m_begin = parseInt(m_begin);
    this.m_end = parseInt(m_end);
    this.w_begin = parseInt(w_begin);
    this.w_end = parseInt(w_end);
  }
}